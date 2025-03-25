package main

import (
	"chuxin/common/core"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

func main() {
	// 打印
	fmt.Println("hello world")

	// 初始化路由
	//controller.InitRouter()

	//	初始化路由
	Router := core.Routers()
	address := ":9999"
	s := initServer(address, Router)
	fmt.Println(s.ListenAndServe().Error())
}

type server interface {
	ListenAndServe() error
}

func initServer(address string, router *gin.Engine) server {
	return &http.Server{
		Addr:           address,
		Handler:        router,
		ReadTimeout:    10 * time.Minute,
		WriteTimeout:   10 * time.Minute,
		MaxHeaderBytes: 1 << 20,
	}
}
