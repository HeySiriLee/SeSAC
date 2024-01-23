package _05_class._03_final;

// Final Variable
// - A variable declared with the 'final' keyword cannot be changed once it is initialized
// - 'Final' 키워드가 지정된 변수는 한번 초기화하면 값 변경을 할 수 없음
public class FinalVariableEx {
    public static void main(String[] args) {
        // Declaration and initialization of a final variable
        // Final 변수 선언 및 초기화
        final int finalNumber = 10; // final int finalNumber = 20; // Error /Compile
        // Attempting to change an initialized value results in a compilation error
        // 초기화된 값을 변경하려고 하면 컴파일 오류 발생

        // Read-only
        System.out.println("Final Number: " + finalNumber);
    }
}

