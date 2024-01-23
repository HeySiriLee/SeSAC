package _05_class._01_class;

public class Person {
    // Field (private)
    private int age;
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    public static void main(String[] args) {
        Person codee = new Person();
        codee.age = 10; // Recommend X
        codee.setName("codee"); // Recommend O

        System.out.println(codee.age); // Recommend X
        System.out.println(codee.getAge()); // Recommend O
    }
}
