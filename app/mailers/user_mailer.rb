class UserMailer < ActionMailer::Base
  default :from => "no-reply@nokill.nyc"

  def email_verification(user)
    @user = user
    mail(:to => "#{user.email}", :subject => "Email Verification")
  end

end
