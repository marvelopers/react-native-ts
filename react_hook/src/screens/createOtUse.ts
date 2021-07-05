const cache: Record<string, any> = {};

export const createOrUse = <T>(key: string, callback: () => T) =>
  !cache[key] ? (cache[key] = callback()) : cache[key];
