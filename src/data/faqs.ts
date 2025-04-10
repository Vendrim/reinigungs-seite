export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: 'Welche Reinigungsleistungen bieten Sie an?',
                answer: 'Wir bieten eine Vielzahl von Reinigungsdienstleistungen an, darunter Unterhaltsreinigung, Büroreinigung, Glas- und Fensterreinigung, Grundreinigung, Bauendreinigung sowie Haushaltsreinigung. Auf Wunsch erstellen wir ein individuelles Reinigungskonzept, das genau auf Ihre Bedürfnisse abgestimmt ist.',
            },
            {
                question: 'Muss ich bei der Reinigung anwesend sein?',
                answer: 'Nein, Ihre Anwesenheit ist nicht erforderlich. Viele unserer Kunden geben uns einen Schlüssel oder vereinbaren feste Zeiten, zu denen unsere Reinigungskräfte Zugang zum Objekt haben. Selbstverständlich behandeln wir Ihre Räumlichkeiten mit größter Sorgfalt und Diskretion.',
            },
            {
                question: 'Verwenden Sie umweltfreundliche Reinigungsmittel?',
                answer: 'Ja, wir legen großen Wert auf Nachhaltigkeit und verwenden umweltfreundliche, biologisch abbaubare Reinigungsmittel. Wenn Sie besondere Anforderungen haben (z. B. Allergien), teilen Sie uns das bitte im Voraus mit – wir passen unsere Reinigungsmittel entsprechend an.',
            },
            {
                question: 'Wie kurzfristig kann ich einen Reinigungstermin buchen?',
                answer: 'In der Regel können wir auch kurzfristige Anfragen bearbeiten – je nach aktueller Auftragslage sogar am selben oder nächsten Werktag. Kontaktieren Sie uns am besten telefonisch oder per E-Mail, um die Verfügbarkeit zu prüfen.',
            },
            {
                question: 'Wie viel kostet eine Reinigung?',
                answer: 'Die Kosten hängen von verschiedenen Faktoren ab, wie der Größe der zu reinigenden Fläche, dem Reinigungsumfang und der Häufigkeit. Gerne erstellen wir Ihnen ein unverbindliches Angebot nach einer kurzen Beratung oder Besichtigung vor Ort.',
            },
        ],
    },
};
