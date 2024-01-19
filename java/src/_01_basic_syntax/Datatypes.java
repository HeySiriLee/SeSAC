package _01_basic_syntax;

// Primitive Type
// 기본형
// - It must be declared before it can be used.
// - 사용되기 전에 산언이 되어야 한다.
// - The length of the data type does not change depending on the OS.
// - OS에 따라 자료형 길이가 변하지 않는다.
// - "Non-object" type and cannot have a null value. (Null is also treated as an object)
// - "비객체" 타입이므로 null 값을 가질 수 없다. (null도 객체 취급)

// Reference Type
// 참조형
// - Inherited java.lang.Object.
// - java.lang.Object 상속받음.
// - All but basic types are reference types.

public class Datatypes {
    public static void main(String[] args) {
        // Identifier
        char name; // Possibility
        // int 2name; // First numeric characters are not allowed
        int name2; // Available if the number is not first letter
        int student_ID$; // Only special symbols '_', '$' are available
        // char for; // Reservation word (keyword) not available

        // Primitive Type
        System.out.println("--- Primitive Type ---");
        // Declaration of integer variables
        int x = 10;
        long y = 100000000L; // Long type should be followed by 'L' or 'l'
        short z = 12345;
        byte b = 127;

        // Declaration of real variables
        float a = 3.14f; // Float type should be followed by 'F' or 'f'
        double c = 2.712245;

        // Declaration of Character Variables
        char ch = 'A';

        // Declaration of Logical Variables
        boolean bool = true;

        // Variable Output
        System.out.println("Integer variable: " + x + "," + y + "," + z + "," + b);
        System.out.println("Real variable: " + a + "," + c);
        System.out.println("Character variable: " + ch);
        System.out.println("Logical variable: " + bool);



        //////////
        // Reference Type
        // 참조형
        System.out.println("--- Reference Type ---");

        // String Reference Variables Declaration and Initialization
        // String 참조형 변수 선언과 초기화
        // - In Java, the String type is special.
        //   It is a reference type, but it is used as a basic type. (Unchanging object)
        // - Java에서 String 타입은 특별함
        //   참조형이지만, 기본형처럼 사용함.(불변 객체)
        // - The default data type is compared through the "==" operator,
        //   but the comparison between String objects uses the .equals() method.
        // - 기본 자료형은 "==" 연산자를 통해 비교하지만,
        //   String 객체간 비교는 .equals() 메서드를 사용함.
        String greeting = "Hello, World!";

        // Array Reference Variables Declaration and Initialization
        // 배열 참조형 변수 선언과 초기화
        int[] nums = {1,2,3,4,5};

        // Class Reference Variables Declaration and Initialization
        // 클래스 참조형 변수 선언과 초기화
        Person person = new Person("Sesac",99);

        System.out.println("String variable: " + greeting);
        // ver1. General 'for' Sentence
        System.out.print("Array variable: ");
        for(int i =0; i < nums.length; i++) {
            System.out.print(nums[i] + " ");
        }
        // ver2. 'for-each' Sentence
        for(int num : nums) {
            System.out.print(num + " ");
        }
        System.out.println();
        System.out.println("Person object: " + person.getName() + ", " + person.getAge());

    }
}
// Class
class Person {
    private String name;
    private int age;
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {return name;}
    public int getAge() {return age;}
}