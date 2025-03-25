package middleware

import "github.com/gin-gonic/gin"

func JWTAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		//token := c.Request.Header.Get("Authorization")
		// 获取token
		token := c.GetHeader("Authorization")
		//user, err := models.VerifyToken(token)
		if token == "" {
			c.AbortWithStatusJSON(401, gin.H{"error": "未授权访问"})
			return
		}
		//c.Set("currentUser", user) // 将用户信息存入上下文
		c.Next()
	}
}
