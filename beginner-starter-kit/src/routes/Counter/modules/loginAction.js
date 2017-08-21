
let url = 'http://172.22.35.188:50080/api/Post'
// token 无效
export const loginCounter = (ma) => {
    return dispatch => {
        return fetch(url,{
                    method: 'POST',
                    headers: {
                        Authorization:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxIiwic3ViIjoiZ3Vlc3QifQ.15OCZWLOoIWlGjn8x4xBQUgEt5E_kVwnnUz_dZUJSRRbHgVxtyDdGphBtuvmpFDmg4WP3DxN_OmDak8jjg2lXA'
                    },
                    body: JSON.stringify(ma)
                })
                .then(r => r.json())
                .then(json => {
                    console.log(json)
                    if(json.code === 200000){
                        alert("非法用户")
                        dispatch({
                            type: 'LOGIN_WARNING'
                        })
                    } else {
                        alert("登陆成功")
                        dispatch({
                            type: 'LOGIN_SUCCESS'
                        })
                    }
                })
    }
}