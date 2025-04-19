import axios from 'axios';
import { IsolatedBack } from '../../pages/isolatedBack/isolatedBackPage';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('it should be possible to check the sending and response of the prediction API', () => {
	it('low risk prediction when all answers are “No”', async () => {
		const inputData = {
			GENDER: '1',
			AGE: 25,
			SMOKING: '0',
			YELLOW_FINGERS: '0',
			ANXIETY: '0',
			PEER_PRESSURE: '0',
			CHRONIC_DISEASE: '0',
			FATIGUE: '0',
			ALLERGY: '0',
			WHEEZING: '0',
			ALCOHOL_CONSUMING: '0',
			COUGHING: '0',
			SHORTNESS_OF_BREATH: '0',
			SWALLOWING_DIFFICULTY: '0',
			CHEST_PAIN: '0',
		};

		const mockResponse = {
			data: { resultado: 'Predição bem-sucedida com risco baixo' },
		};

		mockedAxios.post.mockResolvedValue(mockResponse);

		const isolatedBack = new IsolatedBack();
		const response = await isolatedBack.sendPredictionRequest(inputData);

		console.log('Resposta para todas "Não":', response.data.resultado);

		expect(response.data.resultado).toBe(
			'Predição bem-sucedida com risco baixo',
		);
	});

	it('low risk prediction when all answers are “Yes”', async () => {
		const inputData = {
			GENDER: '1',
			AGE: 25,
			SMOKING: '1',
			YELLOW_FINGERS: '1',
			ANXIETY: '1',
			PEER_PRESSURE: '1',
			CHRONIC_DISEASE: '1',
			FATIGUE: '1',
			ALLERGY: '1',
			WHEEZING: '1',
			ALCOHOL_CONSUMING: '1',
			COUGHING: '1',
			SHORTNESS_OF_BREATH: '1',
			SWALLOWING_DIFFICULTY: '1',
			CHEST_PAIN: '1',
		};

		const mockResponse = {
			data: { resultado: 'Predição bem-sucedida com risco alto' },
		};

		mockedAxios.post.mockResolvedValue(mockResponse);

		const isolatedBack = new IsolatedBack();
		const response = await isolatedBack.sendPredictionRequest(inputData);

		console.log('Resposta para todas "Sim":', response.data.resultado);

		expect(response.data.resultado).toBe(
			'Predição bem-sucedida com risco alto',
		);
	});
});
