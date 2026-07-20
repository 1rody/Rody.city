import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat') || '-12.9714';
    const lon = searchParams.get('lon') || '-38.5014';

    try {
        const res = await fetch(
            `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
            {
                headers: {
                    'User-Agent': 'RodyCityPortfolio/1.0 (rody.city)'
                },
                next: { revalidate: 600 } 
            }
        );

        if (!res.ok) {
            return NextResponse.json({ error: 'Erro ao buscar clima externo' }, { status: res.status });
        }

        const data = await res.json();
        const currentTemp = data.properties.timeseries[0].data.instant.details.air_temperature;

        return NextResponse.json({ temp: currentTemp });
    } catch (error) {
        return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
    }
}