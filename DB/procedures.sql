USE GeoProject
GO

CREATE OR ALTER PROCEDURE sp_sap_insert_coordinates @longitude FLOAT, @latitude FLOAT
AS
BEGIN
	
    INSERT INTO _sap_coordinates (longitude, latitude) VALUES (@longitude, @latitude);
      
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_insert_coordinates @longitude = '2.45' , @latitude = '22.55';
		SELECT * FROM _sap_coordinates

    *********************************************************************************/
END
go

-- /////////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_get_coordinates_in_json
AS
BEGIN

    SELECT longitude, latitude FROM _sap_coordinates FOR JSON AUTO; 
   
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_get_coordinates_in_json;

    *********************************************************************************/
END
go

-- /////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_get_coordinates_in_xml
AS
BEGIN

    -- SELECT longitude, latitude, 2357 as 'idk' FROM _sap_coordinates FOR XML PATH;
	SELECT 
    (
        SELECT 
            CONCAT(latitude, ',', longitude,',', altitude, ',') AS [text()]
        FROM 
            _sap_coordinates
        ORDER BY 
            coordinates_id
        FOR XML PATH(''), TYPE
    ).value('.', 'NVARCHAR(MAX)') AS coordinates
	FOR XML PATH('coordinates')
   
    /********************************* TEST UNITARIO*********************************
		
		EXEC sp_sap_get_coordinates_in_xml;

    *********************************************************************************/
END
go

-- /////////////////////////////////////
CREATE OR ALTER PROCEDURE sp_sap_insert_logs
AS
BEGIN
	DECLARE @log_id VARCHAR(255) = NEWID();

    INSERT INTO _sap_logs (log_identifier,longitude,latitude,altitude,coordinate_created) SELECT @log_id,longitude, latitude,altitude, created 
	FROM _sap_coordinates;
   
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
