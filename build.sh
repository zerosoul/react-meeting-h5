#!/bin/bash -ilex

# 本地环境
deploy_local() {
	echo "building local"
}

# 开发环境
deploy_dev() {
	# 编译
	echo "building in development server"
	echo "npm version:"
	npm -v 
	
	echo "nodejs version:"
	node -v
	npm install && npm run build

	# 编译失败，不能部署代码
	if [ $? -ne 0 ]; then
		echo "编译失败!"
		exit 1
	fi

	# 部署
	rsync -av --delete dist /data/www/FRONTEND/react-meeting-h5/
}

#测试环境
deploy_test() {
        # 编译
        echo "building in test server"
        echo "npm version:"
        npm -v 

        echo "nodejs version:"
        node -v
        npm install && npm run build

        # 编译失败，不能部署代码
        if [ $? -ne 0 ]; then
                echo "编译失败!"
                exit 1
        fi

        # 部署
        echo ">>>>>>start deploy to $Host <<<<<<<"
        scp -P $Port dist/* $Host:/srv/ops/docker/web/test/data/FRONTEND/react-meeting-h5/dist/
        echo "deploy $Host finished"
}

# 预上线环境
deploy_preview() {
	# 编译
	echo "building in preview server"
	echo "npm version:"
	npm -v 
	
	echo "nodejs version:"
	node -v
	# 更改配置
	sed -i s#http://wechatapi.1d1d100.net#https://api.1d1d100.com# src/config.js

	npm install && npm run build

	# 编译失败，不能部署代码
	if [ $? -ne 0 ]; then
		echo "编译失败!"
		exit 1
	fi

	# 部署
    version=$(date +%Y%m%d%H%M%S)
    path=/data/www/FRONTEND/react-meeting-h5-$version
    tarz=/tmp/react-meeting-h5-$version.tar.gz
    symlink=/data/www/FRONTEND/react-meeting-h5

	# 打包
    tar -zcf $tarz dist

	# 分发到服务器
	for host in $HOSTS
	do
		echo ">>>>>>start deploy to $host.<<<<<<<"
		scp $tarz root@$host:$tarz
        ssh root@$host "mkdir -p $path && tar -zxf $tarz -C $path && chown -R www-data:www-data $path && rm -f $symlink && ln -sf $path $symlink"
		echo "deploy $host finished"
	done
}

# 线上环境
deploy_prod() {
	# 编译
	echo "building in production server"
	echo "npm version:"
	npm -v 
	
	echo "nodejs version:"
	node -v
	# 更改配置
	sed -i s#http://wechatapi.1d1d100.net#https://api.1d1d100.com# src/config.js

	npm install && npm run build

	# 编译失败，不能部署代码
	if [ $? -ne 0 ]; then
		echo "编译失败!"
		exit 1
	fi

	# 部署
    version=$(date +%Y%m%d%H%M%S)
    path=/data/www/FRONTEND/react-meeting-h5-$version
    tarz=/tmp/react-meeting-h5-$version.tar.bz2
    symlink=/data/www/FRONTEND/react-meeting-h5

	# 打包
    tar -jcf $tarz dist

	# 分发到服务器
	for host in $HOSTS
	do
		echo ">>>>>>start deploy to $host.<<<<<<<"
		scp $tarz root@$host:$tarz
        ssh root@$host "mkdir -p $path && tar -jxf $tarz -C $path && chown -R www-data:www-data $path && rm -f $symlink && ln -sf $path $symlink"
		echo "deploy $host finished"
	done
}

case $1 in
    dev|test|preview|prod)
        deploy_$1
        ;;  
    *)  
        echo "Usage: ./build.sh dev|test|preview|prod"
        exit 1
        ;;  
esac
