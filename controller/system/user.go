package system

import (
	"chuxin/common/middleware"
	"chuxin/service"
	"github.com/gin-gonic/gin"
)

type UserController struct{}

func RegisterUserRoutes(router *gin.RouterGroup) {

	// 创建 UserService 的实例
	userService := &service.UserService{}

	// 用户组
	userGroup := router.Group("user")
	{
		// 公共路由（无需认证）
		userGroup.POST("/register", userService.RegisterUser)
		userGroup.POST("/login", userService.LoginUser)
		userGroup.GET("/list", userService.GetUserList)

		// 私有路由（需JWT认证）
		authGroup := userGroup.Use(middleware.JWTAuth())
		{
			authGroup.GET("/userInfo", userService.GetUserInfo)
		}
	}
}
