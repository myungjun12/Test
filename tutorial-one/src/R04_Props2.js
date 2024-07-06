const 부모2번 = (props) => {
    // property = props 약자로 씀 / 뜻 : 전달하기 위한 부품
    //props : 부모 컴포넌트(태그)로 부터 전달받은 값을 담은 객체

    // JS 변수 선언 / 초기화 방법 중 하나
    // 오른쪽에 있는 (props) 객체의 key 값이 
    // 왼쪽에 작성된 변수명과 일치하다면
    // 자동으로 대입
    const {name, age, gender} = props;

    return(
        <div className="info">
            이름 : {name} / 나이 {age} / 성별 {gender}
        </div>
    );
}

export default 부모2번;