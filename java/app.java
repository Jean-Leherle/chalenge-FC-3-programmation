import java.util.Scanner;

public class app { 
  
  public static void main(String[] args) {
    System.out.println("écriver votre réponse : ");
    Scanner scanner = new Scanner(System.in);
    String answer = scanner.next();
    System.out.println("votre réponse est "+answer);
    scanner.close();
   }
}
