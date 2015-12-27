class AddNotNullToPhoneNumberInUsersTable < ActiveRecord::Migration
  def change
    change_column_null :users, :phone_number, false
  end
end
