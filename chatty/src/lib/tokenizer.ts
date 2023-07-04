import GPT3TokenizerImport from 'gpt3-tokenizer'

const GPT3Tokenizer: typeof GPT3TokenizerImport =
	typeof GPT3TokenizerImport === 'function'
		? GPT3TokenizerImport
		: (GPT3TokenizerImport as any).default

const tokenizer = new GPT3Tokenizer({ type: 'gpt3' })

export function getTokens(input: string): number {
	const tokens = tokenizer.encode(input)
	return tokens.text.length
}

export function splitIntoChunks(text: string, maxTokenLength: number): string[] {
	const tokens = tokenizer.encode(text);
	const chunks = [];

	for (let i = 0; i < tokens.text.length; i += maxTokenLength) {
		const chunk = tokens.text.slice(i, i + maxTokenLength).join('')
		chunks.push(chunk);
	}

	return chunks;
}