package config

type Mysql struct{}

func (m *Mysql) Dsn() string {
	// "root:123456@tcp(127.0.0.1:3306)/test?charset=utf8"
	return "root:123456@tcp(127.0.0.1:3306)/test?charset=utf8"
}
