# organix 介绍

core contract of organix protocol

# organix编译部署

## 依赖环境

1. eosio.cdt --- tag: v1.7.0 或以上
2. eosio.contract --- tag:  v1.9.1 或以上

## 编译

#### 1. 将organix目录放入eosio.contracts内,跟eosio.token同级即可。
#### 2. 编辑文件 eosio.contracts/CMakeLists.txt:

```
add_subdirectory(organix)
```
#### 3. 运行eosio.contracts/build.sh完成编译
 ```
 ./build.sh
 ```
 
## 方案
```
合约帐号: core.ogx
销毁账号: burn.ogx
reward账号: reward.ogx
synth账号: synth.ogx
分配帐号: dist.ogx
手续费帐号: fee.ogx
日志帐号: log.ogx
管理帐号: admin.ogx
```

## 部署
```
cleos -u 'https://eospush.tokenpocket.pro' system newaccount ogx core.ogx EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G --buy-ram '0.4000 EOS' --stake-net '0.1000 EOS' --stake-cpu '0.1000 EOS'
cleos -u 'https://eospush.tokenpocket.pro' set account permission core.ogx active '{"threshold": 1,"keys": [{"key": "EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G", "weight": 1}],"accounts": [{"permission":{"actor":"core.ogx","permission":"eosio.code"},"weight":1}]}' owner -p core.ogx@owner

cd build
cleos -u 'https://eospush.tokenpocket.pro' set contract core.ogx ./organix -p core.ogx -x 180

//销毁账号
cleos -u 'https://eospush.tokenpocket.pro' system newaccount ogx burn.ogx EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G --buy-ram '0.5000 EOS' --stake-net '0.5000 EOS' --stake-cpu '1.0000 EOS'
cleos -u 'https://eospush.tokenpocket.pro' set account permission burn.ogx active '{"threshold": 1,"keys": [{"key": "EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G", "weight": 1}],"accounts": [{"permission":{"actor":"core.ogx","permission":"eosio.code"},"weight":1}]}' owner -p burn.ogx@owner
//私募账号
cleos -u 'https://eospush.tokenpocket.pro' system newaccount ogx synth.ogx EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G --buy-ram '0.5000 EOS' --stake-net '0.5000 EOS' --stake-cpu '1.0000 EOS'
cleos -u 'https://eospush.tokenpocket.pro' set account permission synth.ogx active '{"threshold": 1,"keys": [{"key": "EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G", "weight": 1}],"accounts": [{"permission":{"actor":"core.ogx","permission":"eosio.code"},"weight":1}]}' owner -p synth.ogx@owner
//奖励账号
cleos -u 'https://eospush.tokenpocket.pro' system newaccount ogx reward.ogx EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G --buy-ram '0.5000 EOS' --stake-net '0.5000 EOS' --stake-cpu '1.0000 EOS'
cleos -u 'https://eospush.tokenpocket.pro' set account permission reward.ogx active '{"threshold": 1,"keys": [{"key": "EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G", "weight": 1}],"accounts": [{"permission":{"actor":"core.ogx","permission":"eosio.code"},"weight":1}]}' owner -p reward.ogx@owner
//分配账号
cleos -u 'https://eospush.tokenpocket.pro' system newaccount ogx dist.ogx EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G --buy-ram '0.5000 EOS' --stake-net '0.5000 EOS' --stake-cpu '1.0000 EOS'
cleos -u 'https://eospush.tokenpocket.pro' set account permission dist.ogx active '{"threshold": 1,"keys": [{"key": "EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G", "weight": 1}],"accounts": [{"permission":{"actor":"core.ogx","permission":"eosio.code"},"weight":1}]}' owner -p dist.ogx@owner
//手续费账号
cleos -u 'https://eospush.tokenpocket.pro' system newaccount ogx fee.ogx EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G --buy-ram '0.5000 EOS' --stake-net '0.5000 EOS' --stake-cpu '1.0000 EOS'
cleos -u 'https://eospush.tokenpocket.pro' set account permission fee.ogx active '{"threshold": 1,"keys": [{"key": "EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G", "weight": 1}],"accounts": [{"permission":{"actor":"core.ogx","permission":"eosio.code"},"weight":1}]}' owner -p fee.ogx@owner
//管理员账号
cleos -u 'https://eospush.tokenpocket.pro' system newaccount ogx admin.ogx EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G EOS5FvkeUWSrJ1nj8AqNkpcUrKJtpnTG7RRnfh9jNAqLWec32wi1G --buy-ram '0.5000 EOS' --stake-net '0.5000 EOS' --stake-cpu '1.0000 EOS'

//购买RAM
cleos -u 'https://eospush.tokenpocket.pro' system buyram ogx core.ogx '10.0000 EOS'
cleos -u 'https://eospush.tokenpocket.pro' system delegatebw ogx core.ogx '0.0000 EOS' '1000.0000 EOS'
cleos -u 'https://eospush.tokenpocket.pro' system undelegatebw ogx core.ogx '0.0000 EOS' '1000.0000 EOS'
```
## 配置初始数据
```
//修改抵押率为800
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx editissuance '["0", "12500000", "100000000"]' -p core.ogx
//启动系统
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx editglobal '["1", "core.ogx", "dist.ogx", "reward.ogx", "synth.ogx", "fee.ogx", "burn.ogx", "log.ogx"]' -p core.ogx
//暂停系统
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx editglobal '["0", "core.ogx", "dist.ogx", "reward.ogx", "synth.ogx", "fee.ogx", "burn.ogx", "log.ogx"]' -p core.ogx

```

## 查询
```
cleos -u 'https://eospush.tokenpocket.pro' get table core.ogx core.ogx debtledger
cleos -u 'https://eospush.tokenpocket.pro' get currency balance core.ogx core.ogx OGX
```
## 使用OGX系统
```
//关闭手续费窗口（每个周期都需要处理）
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx closecfeepod '[]' -p core.ogx

//清理一个合成资产
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx purge '[]' -p core.ogx

//mint
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx mint '["admin.ogx"]' -p admin.ogx

//铸造
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx issuesynths '["admin.ogx", "1000000.00000000 OUSD"]' -p admin.ogx
//销毁
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx burnsynths '["admin.ogx", "1.00000000 OUSD"]' -p admin.ogx
//交易
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx exchange '["admin.ogx", "8,OUSD", "10.00000000 OUSD", "8,OBTC", "admin.ogx", ""]' -p admin.ogx

//领取手续费收入
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx claimfees '["ogxmarketing"]' -p ogxmarketing

//领取解锁的私募额度
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx synthvest '["admin.ogx"]' -p admin.ogx
//领取通胀奖励的额度
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx rewardvest '["ogxmarketing"]' -p ogxmarketing

//标记清算
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx flagaccliq '["admin.ogx", "admin1.ogx"]' -p admin.ogx
//清算
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx liquidate '["admin.ogx", "admin1.ogx", "30.00000000 OUSD"]' -p admin.ogx
//清理标记
cleos -u 'https://eospush.tokenpocket.pro' push action core.ogx checkremliq '["admin1.ogx"]' -p admin.ogx

```