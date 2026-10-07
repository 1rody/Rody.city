"use client";
import { useState, useEffect } from 'react';

interface weatherData {
    temp: number | null;
    loading: boolean;
    error: string | null;
}

export function useWeather() {
    const [weather, setWeather] = useState<weatherData>({
        temp: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchWeatherFromBackend = async (lat: number, lon: number) => {
            try {
                const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
                const data = await res.json();

                if (!res.ok) throw new Error(data.error || "Erro ao carregar");

                setWeather({
                    temp: data.temp,
                    loading: false,
                    error: null,
                });
            } catch (err) {
                setWeather(prev => ({ ...prev, loading: false, error: "Erro ao carregar clima" }));
            }
        };

        if (!("geolocation" in navigator)) {
            fetchWeatherFromBackend(-12.9714, -38.5014);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                fetchWeatherFromBackend(position.coords.latitude, position.coords.longitude);
            },
            () => {
                fetchWeatherFromBackend(-12.9714, -38.5014);
            }
        );
    }, []);

    return weather;
}