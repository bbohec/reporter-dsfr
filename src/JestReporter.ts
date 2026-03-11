import type { Reporter } from '@jest/reporters';
import type { TestContext, AggregatedResult } from '@jest/test-result';
import { CoreReporter } from "./CoreReporter";

// --- Implémentation Jest ---

export class JestReporter implements Reporter {
    private core = new CoreReporter();

    onRunComplete(contexts: Set<TestContext>, results: AggregatedResult): void {
        console.log('--- Rapport Jest ---');
        console.log(this.core.format(results));
    }
}
