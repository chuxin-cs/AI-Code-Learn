package controller

import (
	"chuxin/controller/system"
	"github.com/gin-gonic/gin"
)

var RouterGroupApp = new(RouterGroup)

type RouterGroup struct {
	System system.RouterGroup
}

// InitRouter 前端比较喜欢用index做为入口文件
func InitRouter() *gin.Engine {
	// 创建 gin 实例
	router := gin.New()
	// 注册路由组
	InitRouterGroup(router)
	// 启动并运行在9000端口
	err := router.Run(":9000")
	// 如果不等于 nil 说明启动失败了
	if err != nil {
		return nil
	}
	// 返回gin实例
	return router
}

func InitRouterGroup(router *gin.Engine) {
	//	注册路由组
	api := router.Group("/v1")
	{
		system.RegisterUserRoutes(api)
	}
}
