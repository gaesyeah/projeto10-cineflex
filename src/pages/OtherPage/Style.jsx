import styled from "styled-components"

const OtherPage = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    img{
        width: 330px;
    }
    button{
        position: absolute;
        margin-top: 350px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p{
        text-align: center;
        font-size: 20px;
        &:nth-child(2){
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 10px;
        }
    }
    h1{
        font-weight: 600;
        margin-bottom: -9px;
        font-size: 70px;
        color: #E8833A;
        text-align: center;
        width: 300px;
    }
`

export default OtherPage;