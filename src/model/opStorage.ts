import Taro from '@tarojs/taro'

// 获取当前用户weddingID
export const getWeddingID = () => {
    try {
        var value = Taro.getStorageSync('wedding_id')
        return value;
    } catch (e) {
        return 0
    }

};


// 保存wedding_id
export const setWeddingID = (wedding_id: string) => {

    Taro.setStorage({
        key: "wedding_id",
        data: wedding_id
    })

};

export const getInfo = (key) => {
    try {
        var value = Taro.getStorageSync(key)
        return value;
    } catch (e) {
        return '';
    }

};


export const getUserInfo = () => {

    let nickName = getInfo('nickName')
    let avatarUrl = getInfo('avatarUrl')
    if (nickName === '') {
        Taro.getUserProfile({
            desc: ' 用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                var userInfo = res.userInfo
                Taro.setStorage({
                    key: 'avatarUrl',
                    data: userInfo.avatarUrl,
                })
                Taro.setStorage({
                    key: 'nickName',
                    data: userInfo.nickName

                })
                console.log(userInfo)
            }
        })
    }
    else{
        return {
            'nickName':nickName,
            'avatarUrl':avatarUrl
        }
    }
}

// // 用户登出，删除cookie
// export const logout = (props) => {
//     console.log(props)
//     cookie.remove('Token');
//     cookie.remove('Auth');
//     cookie.remove('UserName');
//     props.history.push('/login');
// };


// // 删除cookie
// export const deleteCookies = () => {

//     cookie.remove('Token');
//     cookie.remove('Auth');
//     cookie.remove('UserName');

// };


// // 检测token是否过期
// export const checkToken = (_this) =>{

//     let token = getToken();
//     if (typeof(token) === "undefined" ){
//         alert('登录已失效！');
//         if (typeof(_this.props) === "undefined" )   _this.history.push('/login');
//         else                                        _this.props.history.push('/login');
//     }
//     else return 1;

// }
