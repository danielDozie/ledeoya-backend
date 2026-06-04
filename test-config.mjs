import { starterCollections, mediaCollections, authCollections, coreSettingsGlobals } from '@kyro-cms/core/templates';
const collections = [...Object.values(starterCollections), ...Object.values(mediaCollections), ...Object.values(authCollections)];
console.log('collections:', collections.length);
console.log('globals:', coreSettingsGlobals.length);
