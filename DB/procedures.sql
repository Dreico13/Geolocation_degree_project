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
            CONCAT(latitude, ',', longitude,',', altitude) AS [text()]
        FROM 
            _sap_coordinates
        ORDER BY 
            coordinates_id
        FOR XML PATH(''), TYPE
    ).value('.', 'NVARCHAR(MAX)') AS coordinates
	FOR XML PATH('root')
   
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

    INSERT INTO _sap_logs (log_identifier,longitude,latitude,altitude,coordinate_created) SELECT @log_id,longitude, latitude,altitude, created FROM _sap_coordinates;
   
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

/********************************* INSERT COORDIANTES FOR EXAMPLE *********************************
		
		INSERT INTO _sap_coordinates (latitude,longitude)
    VALUES
        (-112.2550785337791, 36.07954952145647),
        (-112.2549277039738, 36.08117083492122),
        (-112.2552505069063, 36.08260761307279),
        (-112.2564540158376, 36.08395660588506),
        (-112.2580238976449, 36.08511401044813),
        (-112.2595218489022, 36.08584355239394),
        (-112.2608216347552, 36.08612634548589),
        (-112.262073428656, 36.08626019085147),
        (-112.2633204928495, 36.08621519860091),
        (-112.2644963846444, 36.08627897945274),
        (-112.2656969554589, 36.08649599090644);

    **********************************************************************************************/




