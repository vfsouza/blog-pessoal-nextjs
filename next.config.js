/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		FIREBASE_API_KEY: "AIzaSyACsj_KWhnFKm6SK6NvffvNVRJ0WlN1VZY",
		FIREBASE_AUTH_DOMAIN: "blog-vfsouza.firebaseapp.com",
		FIREBASE_PROJECT_ID: "blog-vfsouza",
		FIREBASE_STORAGE_BUCKET: "blog-vfsouza.appspot.com",
		FIREBASE_MESSAGING_SENDER_ID: "517166851422",
		FIREBASE_APP_ID: "1:629759720956:web:730fdb62cf641998f4c679",
		FIREBASE_MEASUREMENT_ID: "1:517166851422:web:97e819b351d6e6c54cdbcf",
	},
};

module.exports = nextConfig;
