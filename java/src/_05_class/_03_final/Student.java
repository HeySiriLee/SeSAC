package _05_class._03_final;

public class Student {
    // Final field
    final String campus = "Yongsan"; // method 1. Initialize field at declaration
    final String sid; // method 2. Initialize in the constructor

    public Student(String sid) {
        this.sid = sid;
    }

    public static void main(String[] args) {
        Student std1 = new Student("Sesac");
        System.out.println(std1.campus);
        System.out.println(std1.sid);

        // Final field value cannot be changed
        // std1.campus = "Yeongdeungpo"; // Error
    }
}
