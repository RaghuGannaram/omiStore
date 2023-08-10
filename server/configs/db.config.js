const mongoURL = process.env.MONGO_URL;

const devConfigOptions = {
	dbName: "fashionDB",
	family: 4,
	bufferCommands: true,
	maxPoolSize: 100,
	socketTimeoutMS: 30000,
	connectTimeoutMS: 30000,
	serverSelectionTimeoutMS: 5000,
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

const prodConfigOptions = {
	dbName: "prodDB",
	family: 4,
	bufferCommands: false,
	maxPoolSize: 100,
	socketTimeoutMS: 30000,
	connectTimeoutMS: 30000,
	serverSelectionTimeoutMS: 30000,
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

const mongoOptions = process.env.NODE_ENV === "production" ? prodConfigOptions : devConfigOptions;

const connectCallback = function(error){
	if (error) throw error;
	console.log(`connected to database`);
}

module.exports = {
	mongoURL,
	mongoOptions,
	connectCallback,
};
