// Assuming Tauri APIs are available
import { fs } from '@tauri-apps/api';
import { BaseDirectory } from '@tauri-apps/api/fs';
import { writable } from 'svelte/store';

const userSettings = writable({ name: '', apiKey: '' });

// export async function saveUserSettings() {
// 	await fs.writeTextFile('userData.conf', '12dsf', { dir: BaseDirectory.Cache });
// 	console.log('textFileWritten');
// }

// export async function getFile() {
// 	const result = await fs.readTextFile('userData.conf', { dir: BaseDirectory.Desktop });
// 	console.log(result);
// }
