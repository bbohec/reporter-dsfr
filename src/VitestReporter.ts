// --- Implémentation Vitest (Adaptateur) ---
// Vitest peut utiliser les reporters Jest, mais on peut aussi l'exporter explicitement

export class VitestReporter {
    constructor() {
        // Tu peux initialiser des compteurs ou des buffers ici
    }

    // Cette méthode est appelée par Vitest à la fin des tests
    onFinished(files: any) {
        console.log('--- Rapport Vitest ---');
        console.log(`Nombre de fichiers traités : ${files.length}`);
    }

    // Optionnel : appelé pour chaque fichier terminé
    onTaskUpdate(packs: any) {
        // Logique de progression en temps réel
    }
}
