import { Page, Locator } from '@playwright/test';

export class FormPage {
	private readonly page: Page;
	readonly titlePage: Locator;
	private readonly buttonSend: Locator;
	readonly fieldResult: Locator;

	constructor(page: Page) {
		this.page = page;
		this.titlePage = page
			.locator('div')
			.filter({ hasText: 'Previsão de Câncer de Pulmão' });
		this.buttonSend = page.getByRole('button', { name: 'Enviar' });
		this.fieldResult = page.getByRole('heading', { name: 'Resultado:' });
	}

	private async fillSelectField(fieldId: string, optionName: string) {
		const referenceComponent = this.page.locator(
			`#mui-component-select-${fieldId}`,
		);
		const optionComponent = this.page.getByRole('option', {
			name: optionName,
		});

		await referenceComponent.click();
		await optionComponent.click();
	}

	private async fillNumberField(labelName: string, value: string) {
		const input = this.page.getByRole('spinbutton', { name: labelName });
		await input.click();
		await input.fill(value);
	}

	async fillForm() {
		await this.fillSelectField('GENDER', 'Masculino');
		await this.fillNumberField('Idade', '23');

		const yesFields = [
			'SMOKING',
			'YELLOW_FINGERS',
			'ANXIETY',
			'PEER_PRESSURE',
			'CHRONIC_DISEASE',
			'FATIGUE',
			'ALLERGY',
			'WHEEZING',
			'ALCOHOL_CONSUMING',
			'COUGHING',
			'SHORTNESS_OF_BREATH',
			'SWALLOWING_DIFFICULTY',
			'CHEST_PAIN',
		];

		for (const field of yesFields) {
			await this.fillSelectField(field, 'Sim');
		}

		await this.submitForm();
	}

	async submitForm() {
		await this.buttonSend.click();
	}
}
