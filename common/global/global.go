package global

import (
	"chuxin/common/config"
	"github.com/spf13/viper"
	"gorm.io/gorm"
)

var (
	// DB 数据库全局变量
	DB *gorm.DB

	// CONFIG 全局配置
	CONFIG config.Server

	// VP 全局读取配置文件
	VP *viper.Viper
)
