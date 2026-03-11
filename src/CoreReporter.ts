// --- Cœur du Reporter (Logique métier) ---
export class CoreReporter {
    format(results: any) {
        // Ta logique de formatage ici (couleurs, tableaux, etc.)
        return `Total Tests: ${results.numTotalTests}`;
    }
}
