import axios from 'axios';
import { projectConfig } from '../../project.config';

export class IsolatedBack {
	constructor() {}

	async sendPredictionRequest(inputData: any) {
		try {
			const response = await axios.post(projectConfig.predictURL, {
				user_id: '12345',
				features: [
					Number(inputData.GENDER),
					Number(inputData.AGE),
					Number(inputData.SMOKING),
					Number(inputData.YELLOW_FINGERS),
					Number(inputData.ANXIETY),
					Number(inputData.PEER_PRESSURE),
					Number(inputData.CHRONIC_DISEASE),
					Number(inputData.FATIGUE),
					Number(inputData.ALLERGY),
					Number(inputData.WHEEZING),
					Number(inputData.ALCOHOL_CONSUMING),
					Number(inputData.COUGHING),
					Number(inputData.SHORTNESS_OF_BREATH),
					Number(inputData.SWALLOWING_DIFFICULTY),
					Number(inputData.CHEST_PAIN),
				],
			});
			return response;
		} catch (error) {
			console.error('Error during prediction request:', error);
			throw error;
		}
	}
}
