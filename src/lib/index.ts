export async function POST(event: any) {
	const data = await event.request.formData();
	const prompt = data.get('prompt');

	const resp = await openai.chat.completions.create({
		messages: [{ role: 'user', content: prompt }],
		model: 'gpt-3.5-turbo'
	});

	return new Response(JSON.stringify({ success: true, answer: resp.choices[0].message }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

async function submitPromt(event: any) {
	if (prompt === '') {
		return;
	}
	chat.scrollTop = chat.scrollHeight;
	//Create question
	const question = document.createElement('div');
	question.innerHTML = prompt;
	question.classList.add('question');
	chat.appendChild(question);
	//Process question
	loading = true;
	const form = event.target as HTMLFormElement;
	const data = new FormData(form);
	prompt = '';
	//Get response
	let response = await submitPrompt(prompt);
	console.log(response);
	//Create answer
	const answer = document.createElement('div');
	answer.innerHTML = resp.answer.content;
	answer.classList.add('answer');
	chat.appendChild(answer);
	chat.scrollTop = chat.scrollHeight;
	loading = false;
}
