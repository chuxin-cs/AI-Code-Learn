package core

import (
	"chuxin/common/middleware"
	"chuxin/controller"
	"github.com/gin-gonic/gin"
)

func Routers() *gin.Engine {
	Router := gin.New()
	Router.Use(gin.Recovery())

	systemRouter := controller.RouterGroupApp.System

	// 创建私有
	PrivateGroup := Router.Group("")
	// 创建公有
	PublicGroup := Router.Group("")

	PrivateGroup.Use(middleware.JWTAuth())
	{
		systemRouter.InitUserRouter(PrivateGroup, PublicGroup) // 注册用户路由
	}

	// 注册业务路由
	InitBizRouter(PrivateGroup, PublicGroup)

	// 返回
	return Router
}
