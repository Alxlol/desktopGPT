import { writable } from 'svelte/store';

type UserSettings = {
	name: string | null;
	apiKey: string | null;
};

export const store_userSettings = writable<UserSettings>();

export function updateUserSettings(userSettings: UserSettings) {
	if (userSettings.apiKey && userSettings.name) {
		store_userSettings.set({ name: userSettings.name, apiKey: userSettings.apiKey });
		localStorage.setItem('name', userSettings.name);
		localStorage.setItem('apiKey', userSettings.apiKey);
		console.log('saving user settings...');
	} else {
		console.log('no values, nothing will be saved');
	}
}

export function loadUserSettings() {
	let userSettings: UserSettings = {
		name: localStorage.getItem('name'),
		apiKey: localStorage.getItem('apiKey')
	};
	store_userSettings.set(userSettings);
	console.log('loading user settings');
}
