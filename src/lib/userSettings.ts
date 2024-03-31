import { writable } from 'svelte/store';

type UserSettings = {
	apiKey: string | null;
};

export const store_userSettings = writable<UserSettings>({ apiKey: '' });

export function updateUserSettings(userSettings: UserSettings) {
	if (userSettings.apiKey != null) {
		localStorage.setItem('apiKey', userSettings.apiKey);
	}
	store_userSettings.set({ apiKey: userSettings.apiKey });
}

export function loadUserSettings() {
	let userSettings: UserSettings = { apiKey: '' };

	if (localStorage.getItem('apiKey')) {
		userSettings = { apiKey: localStorage.getItem('apiKey') };
	}

	store_userSettings.set(userSettings);
}
