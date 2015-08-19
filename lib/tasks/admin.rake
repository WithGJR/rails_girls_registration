namespace :admin do
  desc "Create A Admin User" 
  task :create => :environment  do
    puts "--- Please follows the instructions bellow to create a admin user ---" 
    
    user = User.new 
    puts "Email: "
    user.email = STDIN.gets.strip

    puts "Password: "
    user.password = STDIN.gets.strip
    puts "Password Confirmation: "
    user.password_confirmation = STDIN.gets.strip

    user.is_admin = true

    user.save!

    puts "--- Admin user has been created successfully! ---"
  end
end
