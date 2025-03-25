package service

import "github.com/gin-gonic/gin"

type UserService struct{}

func (u *UserService) RegisterUser(c *gin.Context) {
	c.String(200, "注册用户")
}
func (u *UserService) LoginUser(c *gin.Context) {
	c.String(200, "用户登录")
}
func (u *UserService) GetUserInfo(c *gin.Context) {
	c.String(200, "获取用户信息")
}

func (u *UserService) GetUserList(c *gin.Context) {
	c.JSON(200, "获取用户列表")
}
