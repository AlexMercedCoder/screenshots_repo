// +& Written by Alex Merced of AlexMercedCoder.com
/////////////////////////////////////////
// Writing a Function to Bundle Middleware
// function will be passed app object or router, then registers middleware to it
// this can help write middleware in a separate file.

const GlobalMiddleware = (app) => {
    app.use(cors())
    app.use(express.json())
    app.use(morgan("tiny"))
}

const RouterMiddleware = (router) => {
    router.use(CheckAuthorization)
    router.use(cors(RouterSpecificSettings))
}
