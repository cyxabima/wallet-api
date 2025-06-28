import rateLimit from "../db/redis.js";

const rateLimiter = async (req, res, next) => {
    try {
        // here we just kept is simple 
        // in real world application in key we have user id of ip address
        const { success } = await rateLimit.limit("my-rate-limit");
        if (!success) {
            return res.status(429).json({
                message: "Too many requests plz try again later"
            });
        }
        next()

    } catch (error) {
        console.log("Rate Limiter Error", error);
        next(error);
    }
}


export default rateLimiter