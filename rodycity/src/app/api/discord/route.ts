import { NextResponse } from 'next/server';

export async function GET() {
    const botToken = "MTUxNjkzNTcyMDM1NzMzNTA5MA.GPeRho.hcN9gQUWNwWpH3mQiZZ9HoOCs9OJWVm4f1mZtU";
    const guildID = "1494761497312755914";

    try {

        // resumo nesse bloco ai tem a const que fecha a url do discord pegando o token e definindo a const response
        //depois de definir response = https://etcetctc(bottoken) ele pega a auth do token e revalida a cada 60s
        const response = await fetch(`https://discord.com/api/v10/guilds/${botToken}?with_counts=true`, {
            headers: {
                Authorization: `Bot ${botToken}`,
            },
            next: {revalidate: 60}
        });
        if (!response.ok){
            return NextResponse.json({ error: 'Erro ao buscar dados' }, { status: response.status });
        };

        const data = await response.json();

        return NextResponse.json({
            online: data.approximate_presence_count,
            total: data.approximate_member_count,
        });
    }catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}