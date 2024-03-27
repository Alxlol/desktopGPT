import { writable } from 'svelte/store';

type UserSettings = {
	name: string | null;
	apiKey: string | null;
};

export const store_userSettings = writable<UserSettings>();

export function updateUserSettings(userSettings: UserSettings) {
	if (userSettings.name != null) {
		localStorage.setItem('name', userSettings.name);
	}
	if (userSettings.apiKey != null) {
		localStorage.setItem('apiKey', userSettings.apiKey);
	}
	store_userSettings.set({ name: userSettings.name, apiKey: userSettings.apiKey });
}

export function loadUserSettings() {
	let userSettings: UserSettings = {
		name: localStorage.getItem('name'),
		apiKey: localStorage.getItem('apiKey')
	};
	store_userSettings.set(userSettings);
	console.log('loading user settings', userSettings);
}
