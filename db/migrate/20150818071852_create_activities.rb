class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :name
      t.date :registration_start
      t.date :registration_end
      t.text :description
      t.string :location

      t.timestamps null: false
    end
  end
end
