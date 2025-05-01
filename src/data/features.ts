import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Smile,
                title: 'Qualität',
                description:
                    'Ihr Gebäude ist schmutzig? Sie sind es leid, dass Ihre Einrichtungen mit Staub bedeckt sind? Möchten Sie Ihre Wohnung oder Ihr Büro reinigen und dabei frei von Gesundheitsrisiken sein? Wir sind bestrebt, höchste Qualität zu liefern.',
            },
            {
                icon: Shield,
                title: 'Fachkompetenz',
                description:
                    'Wir bieten hochwertige, umweltfreundliche, sichere und zuverlässige Dienstleistungen, die Ihr Gebäude sauber und frisch hinterlassen, ohne dass durch unsachgemäße Reinigung etwas beschädigt wird.',
            },
            {
                icon: TabletSmartphone,
                title: 'Professionalität',
                description:
                    'Unser Reinigungspersonal wird sich ganz auf Ihre Bedürfnisse konzentrieren. Unsere Fachleute sind voll engagiert und arbeiten konsequent, um Ihnen den besten Service zu bieten.',
            },
            {
                icon: Zap,
                title: 'Termingerecht',
                description:
                    'Wir bieten flexible Reinigungsdienste für Ihre Büro- und Geschäftsräume, die im Voraus gemeinsam geplant werden und zuverlässig sind.',
            },
        ],
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail',
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements',
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use',
            },
        ],
    },
};
