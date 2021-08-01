# react-native-ts

### 리액트 훅

리액트 : 컴포넌트 기법으로 가상 DOM 객체를 만들고 객체에 어떤 변화가 감지되면 해당 변화만 화면에 재렌더링해 전체 렌더링 속도를 빠르게 하는 데 초점이 맞춰진 프레임워크입니다.

19년 2월 16.8.0 버전에 리액트 훅을 출시하면서 함수 컴포넌트가 어떤 값을 유지할 수 있도록 새로운 개념의 데이터 캐시 시스템을 만들었습니다.
클래스 컴포넌트 구현의 복잡함과 모호함을 극복하고자 리액트 훅을 만들었습니다. 일관성 있게 함수 컴포넌트에 다양한 기능을 구현할 수 있습니다.

컴포넌트 데이터 관리 : useMemo, useCallback, useState, useReducer
컴포넌트 생명주기 대응 : useEffect, useLayoutEffect
컴포넌트 간 정보 공유 : useContext
컴포넌트 메서드 호출 : useRef, useImperativeHandle

#### 리액트 훅 사용시 주의할 점

1. 같은 리액트 훅은 여러 번 호출할 수 있다.
2. 함수 컴포넌트 몸통이 아닌, 몸통 안 복합 실행문의 {}에서는 호출할 수 없다.
3. 비동기 함수는 콜백 함수로 사용할 수 없다.


### useLayoutEffect vs useEffect 
- useLayoutEffect : 동기로 실행, 콜백 함수가 끝나는 시점까지 프레임워크가 기다림. 
- useEffect: 비동기로 실행

** 리액트 공식문서에서는 꼭 필요한 상황에서만 useLayoutEffect를 사용하도록 권장

### useRef

- TextInput focus, blur와 같은 메서드를 제공하며 
컴포넌트의 메서드를 호출하려면 컴포넌트의 리액트 요소를 얻을 수 있어야 컴포넌트_객체.메서드() 형태로 호출할 수 있습니다.

컴포넌트가 제공하는 메서드를 호출할 수 있도록 ref속성을 제공합니다.
ref 속성으로 컴포넌트의 인스턴스를 얻을 수 있으며, 이를 이용하여 ref.메서드() 형태로 코드를 실행할 수 있습니다.

  ```
  interface RefObject<T> {
    readonly current: T | null
  }
  function useRef<T>(initialValue: T): MutableRefObject<T>;
  function useRef<T>(initialValue: T | null): RefObject<T>;
  ```
  ```
  const flatListRef = useRef<FlatList | null>(null);
  <FlatList ref={flatListRef}/>
  ```
  ```
  flatListRef.current?.scrollToEnd()
  ```

