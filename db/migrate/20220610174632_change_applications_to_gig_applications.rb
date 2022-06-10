class ChangeApplicationsToGigApplications < ActiveRecord::Migration[7.0]
  def change
    rename_table :applications, :gig_applications
  end
end
