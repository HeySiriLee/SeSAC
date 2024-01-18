package _01_basic_syntax;

// Type conversion
// 형 변환
// : converting data type
// : 데이터 타입을 변환하는 것
// = (type) var
// - type: data type
// -  var: variable name

public class Casting {
    public static void main(String[] args){

        // Wider Conversion
        // 묵시적 형 변환
        // - Automatic type conversion from smaller to larger types
        // - 더 작은 타입에서 더 큰 타입으로의 자동 형 변환
        // - In the opposite case, type conversion is not possible implicitly -> must be converted explicitly.
        // - 반대의 경우에는 묵시적으로 형변환 불가능 -> 명시적으로 변환해야함
        int smallNumber = 10;
        double bigNumber = smallNumber; // Automatically convert 'int' to 'double'
                                        // 'int'를 'double' 로 자동 형 변환

        System.out.println("small: " + smallNumber);
        System.out.println("big: " + bigNumber);

        //////////
        // Narrow Conversion
        // 명시적 형 변환
        // - Automatic type conversion from larger to smaller types
        // - 더 큰 타입에서 더 작은 타입으로 강제 형 변환
        double anotherBig = 20.5;
        int anotherSmall = (int)anotherBig; // Coercion of 'double' to 'int'
                                            // 'double'을 'int'로 강제 형 변환

        System.out.println("anotherSmall: " + anotherSmall);
        System.out.println("anotherBig" + anotherBig);

        //////////
        // !!Caution: Data loss may occur
        // !!주의: 데이터 손실이 발생할 수 있는 경우
        int largeNumber = 1000;
        byte smallByte = (byte) largeNumber;

        System.out.println("largeNumber" + largeNumber);
        System.out.println("");
    }
}
