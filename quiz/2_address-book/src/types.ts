interface PhoneNumberDictionary {
  [phone: string]: {
    // key 값이 정해지지 않았을 때, 여러가지로 받는 방법.
    // 이 부분이 home:, office: 등으로 변주
    num: number;
  };
}

// findContactByPhone의 param으로 phoneType받을 때 오류 사전 방지
enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export { Contact, PhoneType };
// PhoneNumberDictionary은 외부에서 쓸일이 없고, 내부 인터페이스이기 때문에
// export 안해준다.
