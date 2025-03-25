package system

import "github.com/gin-gonic/gin"

type UserRouter struct{}

func (s *UserRouter) InitUserRouter(Router *gin.RouterGroup, RouterPub *gin.RouterGroup) {
	// 私有
	userRouter := Router.Group("user")
	// 公有
	userPublicRouter := RouterPub.Group("user")
	{
		userRouter.GET("/list", func(c *gin.Context) {
			c.JSON(200, "private 111")
		})
	}
	{
		userPublicRouter.GET("/info", func(c *gin.Context) {
			c.JSON(200, "public 111")
		})
	}
}
