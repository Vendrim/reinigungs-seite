export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 10,
                label: 'Unterschiedliche Kunden',
            },
            {
                value: 11,
                label: 'Hochhäuser',
            },
            {
                value: 48,
                label: 'Mitarbeiter',
            },
            {
                value: 500000,
                label: 'Saubere Fenster',
                prefix: '+',
            },
        ],
    },
    withContent: {
        id: 'withContent',
        stats: [
            {
                value: 10,
                label: 'Unterschiedliche Kunden',
            },
            {
                value: 11,
                label: 'Hochhäuser',
            },
            {
                value: 48,
                label: 'Mitarbeiter',
            },
            {
                value: 500000,
                label: 'Saubere Fenster',
                prefix: '+',
            },
        ],
    },
};
