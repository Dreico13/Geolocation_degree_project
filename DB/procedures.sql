USE GeoProject
GO

CREATE OR ALTER PROCEDURE sp_sap_insert_coordinates @longitude FLOAT, @latitude FLOAT
AS
BEGIN
	-- DECLARE @ret INT = 0;
    INSERT INTO _sap_coordinates (longitude, latitude) VALUES (@longitude, @latitude);
      
	-- IF (@@ROWCOUNT = 1) SET @ret = 1;

	-- SELECT @ret AS 'RESULT' FOR JSON PATH;
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_insert_coordinates @longitude = '2.45' , @latitude = '29.55';
		SELECT * FROM _sap_coordinates

    *********************************************************************************/
END
go

-- /////////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_get_coordinates
AS
BEGIN

    SELECT longitude, latitude FROM _sap_coordinates FOR JSON AUTO; 
   
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_get_coordinates;

    *********************************************************************************/
END
go

-- /////////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_insert_logs
AS
BEGIN
	DECLARE @log_id VARCHAR(255) = NEWID();

    INSERT INTO _sap_logs (log_identifier,longitude,latitude,coordinate_created) SELECT @log_id,longitude, latitude, created FROM _sap_coordinates;
   
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_insert_logs;
		SELECT * FROM _sap_logs;

    *********************************************************************************/
END
go

-- /////////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_delete_coordinates
AS
BEGIN
	
	TRUNCATE TABLE _sap_coordinates;
   
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_delete_coordinates;
		SELECT * FROM _sap_coordinates;

    *********************************************************************************/
END
go

